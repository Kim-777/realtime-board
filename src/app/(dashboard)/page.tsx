import { UserButton } from '@clerk/nextjs';

export default function DashboardPage() {
  return (
    <div className='flex flex-col gap-y-4'>
      <div>로그인 유저만 볼 수 있음</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
