import { NextResponse } from 'next/server';
import type { GitHubContributionData, APISuccessResponse, APIErrorResponse } from '@/app/lib/types';

// Revalidate every 1 hour (3600 seconds) for ISR
export const revalidate = 3600;

const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';

const GITHUB_QUERY = `
  query {
    viewer {
      login
      name
      avatarUrl
      bio
      company
      location
      websiteUrl
      twitterUsername
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              level
            }
          }
        }
      }
    }
  }
`;

export async function GET(): Promise<
  NextResponse<APISuccessResponse<GitHubContributionData> | APIErrorResponse>
> {
  const timestamp = new Date().toISOString();

  try {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      console.error('GITHUB_TOKEN environment variable is not set');
      return NextResponse.json(
        {
          error: 'GitHub token is not configured',
          timestamp,
        } as APIErrorResponse,
        { status: 500 }
      );
    }

    const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: GITHUB_QUERY }),
      // Ensure fresh data on each fetch
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      console.error(`GitHub API returned status ${response.status}`);
      return NextResponse.json(
        {
          error: `GitHub API error: ${response.statusText}`,
          timestamp,
        } as APIErrorResponse,
        { status: response.status }
      );
    }

    const data = await response.json();

    // Check for GraphQL errors
    if (data.errors) {
      console.error('GraphQL error:', data.errors);
      return NextResponse.json(
        {
          error: 'Failed to fetch GitHub data',
          details: data.errors,
          timestamp,
        } as APIErrorResponse,
        { status: 400 }
      );
    }

    const viewer = data.data?.viewer;
    if (!viewer) {
      throw new Error('No viewer data returned from GitHub API');
    }

    const contributionData: GitHubContributionData = {
      user: {
        login: viewer.login,
        name: viewer.name,
        avatarUrl: viewer.avatarUrl,
        bio: viewer.bio,
        company: viewer.company,
        location: viewer.location,
        websiteUrl: viewer.websiteUrl,
        twitterUsername: viewer.twitterUsername,
      },
      totalContributions: viewer.contributionsCollection.contributionCalendar.totalContributions,
      contributionCollection: {
        contributionCalendar: viewer.contributionsCollection.contributionCalendar,
      },
    };

    return NextResponse.json(
      {
        data: contributionData,
        timestamp,
      } as APISuccessResponse<GitHubContributionData>,
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('GitHub API route error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp,
      } as APIErrorResponse,
      { status: 500 }
    );
  }
}
