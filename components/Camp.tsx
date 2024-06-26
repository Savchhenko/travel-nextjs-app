import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
    backgroundImage: string,
    title: string,
    subtitle: string,
    peopleJoined: string,
};

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
    return (
        <div className={`h-full w-full min-w-[1100px]
            ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl 2xl:rounded-5xl`}
        >
            <div className="flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image
                            src="/folded-map.svg"
                            alt="folded map icon"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-white">{title}</h4>
                        <p className="regular-16 text-white">{subtitle}</p>
                    </div>
                </div>
                <div className="flexCenter gap-6">
                    <span className="flex overflow-hidden -space-x-4">
                        {PEOPLE_URL.map((url) => (
                            <Image
                                className="inline-block h-10 w-10 rounded-full"
                                key={url}
                                src={url}
                                alt="person"
                                width={52}
                                height={52}
                            />
                        ))}
                    </span>
                    <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
                </div>
            </div>
        </div>
    )
};

const Camp = () => {
    return (
        <section className="2xl:max-container relative flex flex-col
            py-10 lg:py-20 lg:mb-10 xl:mb-20"
        >
            <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8
                overflow-x-auto lg:h-[400px] xl:h-[640px]"
            >
                <CampSite
                    backgroundImage="bg-bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prigen, Pasuruan"
                    peopleJoined="50+ Joined"
                />
                <CampSite
                    backgroundImage="bg-bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prigen, Pasuruan"
                    peopleJoined="50+ Joined"
                />
            </div>
        </section>
    )
};

export default Camp;