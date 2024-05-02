
import Section from './Section';
import LogoBar from './LogoBar';

const LogoSection = ({ text, logos }: any) => {
    return (
        <Section fullWidth className="bg-white">
        <div className="lg:pr-10 lg:-mt-4 flex flex-col items-center justify-center h-full">
            <LogoBar text={text} logos={logos} />
        </div>
      </Section>
      );
    };

export default LogoSection;
