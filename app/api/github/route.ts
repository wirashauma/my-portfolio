import { NextRequest, NextResponse } from 'next/server';

interface ContributionData {
  totalContributions: number;
  user: {
    login: string;
    name: string;
    avatarUrl: string;
  };
  contributionCollection: {
    contributionCalendar: {
      totalContributions: number;
      weeks: Array<{
        contributionDays: Array<{
          date: string;
          contributionCount: number;
        }>;
      }>;
    };
  };
}

export async function GET(request: NextRequest) {
  try {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: 'GITHUB_TOKEN is not configured' },
        { status: 500 }
      );
    }

    const query = `
      query {
        viewer {
          login
          name
          avatarUrl
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch from GitHub API' },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (data.errors) {
      return NextResponse.json(
        { error: 'GraphQL error', details: data.errors },
        { status: 400 }
      );
    }

    const { viewer } = data.data;
    const { contributionCalendar } = viewer.contributionsCollection;

    const contributionData: ContributionData = {
      totalContributions: contributionCalendar.totalContributions,
      user: {
        login: viewer.login,
        name: viewer.name,
        avatarUrl: viewer.avatarUrl,
      },
      contributionCollection: {
        contributionCalendar,
      },
    };

    return NextResponse.json(contributionData);
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
