'use client';

export const Info = () => {
  return (
    <div className='absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md'>
      TODO: 보드 정보
      {/* <Hint label='Go to boards' side='bottom' sideOffset={10}>
        <Button asChild variant='board' className='px-2'>
          <Link href='/'>
            <Image src='/logo.svg' alt='Board logo' height={40} width={40} />
            <span className={cn('font-semibold text-xl ml-2 text-black', font.className)}>Board</span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label='Edit title' side='bottom' sideOffset={10}>
        <Button variant='board' className='text-base font-normal px-2' onClick={() => onOpen(data._id, data.title)}>
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side='bottom' sideOffset={10}>
        <div>
          <Hint label='Main menu' side='bottom' sideOffset={10}>
            <Button size='icon' variant='board'>
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions> */}
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className='absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]' />
  );
};
