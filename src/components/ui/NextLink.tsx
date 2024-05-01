import Link from 'next/link';

const NextLink = ({ href, children }: any) => {
  return (
    <Link href={href} className="font-medium text-xl lg:self-end tracking-[0.43px]">
        {children}
        <span className="text-news-green">&gt;</span>
    </Link>
  );
};

export default NextLink;
