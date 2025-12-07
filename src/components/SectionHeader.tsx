interface SectionHeaderProps {
    title: string;
    subtitle: string;
    children?: React.ReactNode;
}

const SectionHeader = ({ title, subtitle, children }: SectionHeaderProps) => {
    return (
        <div className="flex flex-row w-full items-center xl:flex-col md:items-start shrink-0 xl:w-[300px] gap-5">
            <div className="space-y-0">
                <h2 className="text-xl font-semibold font-bricolage">{title}</h2>
                <p className="text-xs text-base-content/50">{subtitle}</p>
            </div>
            {children}
        </div>
    );
};

export default SectionHeader