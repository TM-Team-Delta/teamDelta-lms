import WelcomeCard from '../../components/team/WelcomeCard';
import MentorCard from '../../components/team/MentorCard';
import TeamGoals from '../../components/team/TeamGoals';
import TeamMates from '../../components/team/TeamMates';
import TeamSessions from '../../components/team/TeamSessions';
import TeamSkeleton from '../../components/team/TeamSkeleton';
import Card from '../../components/ui/Card';
import { useEffect, useState } from 'react';
import { Sparkles, Users } from 'lucide-react';
import { teamService } from '../../services/team';

const EmptyTeamState = ({ message }) => {
  return (
    <div className='p-4 sm:p-5 md:p-6 md:pt-0'>
      <Card className='relative overflow-hidden border border-border bg-white shadow-sm'>
        <div className='absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#426154] via-[#4f916e] to-[#57d1a0]' />

        <div className='relative flex min-h-[420px] items-center justify-center'>
          <div className='w-full max-w-3xl p-8 text-center sm:p-10'>
            <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-lg bg-[#426154] text-white shadow-lg shadow-[#426154]/20'>
              <Users className='h-8 w-8' />
            </div>

            <div className='mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-[#57d1a0]/30 bg-[#57d1a0]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#426154]'>
              <Sparkles className='h-3.5 w-3.5' />
              Team Space
            </div>

            <h1 className='mt-6 text-2xl font-semibold tracking-tight text-text-primary sm:text-4xl'>
              You are not assigned to a team yet
            </h1>

            <p className='mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base'>
              Once your team is ready, your mentor, teammates, goals, and
              upcoming sessions will show up here.
            </p>

            <div className='mt-8 grid gap-3 text-left sm:grid-cols-3'>
              <div className='rounded-2xl border border-white bg-white/90 p-4 shadow-sm'>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#4f916e]'>
                  Mentor
                </p>
                <p className='mt-2 text-sm text-text-secondary'>
                  Meet the person guiding your learning journey.
                </p>
              </div>

              <div className='rounded-2xl border border-white bg-white/90 p-4 shadow-sm'>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#4f916e]'>
                  Teammates
                </p>
                <p className='mt-2 text-sm text-text-secondary'>
                  Collaborate with peers working toward the same goals.
                </p>
              </div>

              <div className='rounded-2xl border border-white bg-white/90 p-4 shadow-sm'>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#4f916e]'>
                  Sessions
                </p>
                <p className='mt-2 text-sm text-text-secondary'>
                  Keep track of check-ins, milestones, and upcoming calls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Team = () => {
  const [teamData, setTeamData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await teamService.getOverview();
        setTeamData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load team data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (isLoading) {
    return <TeamSkeleton />;
  }

  if (error) {
    const isUnassignedState = /not assigned to a team/i.test(error);

    if (isUnassignedState) {
      return <EmptyTeamState message={error} />;
    }

    return (
      <div className='p-4 sm:p-5 md:p-6 md:pt-0'>
        <Card className='border border-red-100 bg-red-50 text-red-700 shadow-sm'>
          <div className='space-y-2'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em]'>
              Team Unavailable
            </p>
            <p className='text-sm sm:text-base'>{error}</p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className='space-y-6 p-4 sm:p-5 md:p-6 md:pt-0'>
      <WelcomeCard teamInfo={teamData?.teamInfo} />

      <div className='grid grid-cols-1 gap-4 xl:grid-cols-12'>
        <div className='space-y-4 xl:col-span-8'>
          <MentorCard
            mentor={teamData?.mentor}
            nextSession={teamData?.nextSession}
          />
          <TeamMates
            summary={teamData?.teamMatesSummary}
            members={teamData?.teamMembers}
          />
        </div>

        <div className='space-y-4 xl:col-span-4'>
          <TeamGoals goals={teamData?.teamGoals} />
          <TeamSessions sessions={teamData?.teamSessions} />
        </div>
      </div>
    </div>
  );
};

export default Team;
