import Section from "@/components/ui/Section";
import Image from "next/image";
import detailsImage from "../../../../public/details.png";

const ArticleDetails = () => {
  return (
    <Section fullWidth className="bg-white">
      <div className="px-5 mx-auto">
        <div className="flex flex-col items-center lg:pl-10 max-lg:flex-col max-lg:items-center">
          <div className="max-w-[822px] pt-28 flex flex-col">
            <div className="max-w-[750px]">
              <p className="text-2xl max-w-[750px] tracking-[-0.33px] font-medium leading-[1.4]">
                The Psychology of Short-Form Content: Why We Love Bite-Sized
                Videos. The Psychology of Short-Form Content: Why We Love
                Bite-Sized Videos. The Psychology of Short-Form Content: Why We
                Love Bite-Sized Videos
              </p>
              <h3 className="mt-[40px] font-bold text-5xl tracking-[-0.67px]">
                What is a sales funnel?
              </h3>
              <p className="text-lg mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-lg mt-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </p>
              <div className="py-[22px] border-y-placeholder-grey border-t-[1px] border-b-[1px] !mt-[12px]">
                <p className="mt-2 text-2xl leading-[1.4] font-medium">
                  “At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident”
                </p>
                <p className="mt-8 font-medium text-base text-placeholder-grey">
                  Matthew Barker
                </p>
              </div>
            </div>
            <div className="pt-[4.5rem]">
              <div className="max-w-[748px] mx-auto">
                <Image
                  src={detailsImage}
                  loading="lazy"
                  width={748}
                  height={405}
                  alt="Show Article"
                />
              </div>
            </div>
            <h3 className="mt-20 font-bold text-5xl tracking-[-0.67px]">
              What is a sales funnel?
            </h3>

            <p className="text-lg mt-3 max-w-[750px]">
              In order to fully answer the question “What is a sales funnel?”,
              we need to tackle the different steps of the funnel. While
              different organizations have their own ways of managing and naming
              the sales process and customer touchpoints, these are usually
              structured into three distinct stages.
            </p>

            <h3 className="mt-20 font-bold text-[32px] tracking-[-0.44px] leading-[1.3]">
              1. Top of the sales funnel: Awareness and discovery
            </h3>
            <div className="max-w-[750px]">
              <p className="text-lg mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-lg mt-7">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ArticleDetails;
