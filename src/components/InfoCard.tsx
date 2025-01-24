interface InfoCardProps {
    title: string;
    mainContent: React.ReactNode;
    footer?: string | React.ReactNode;
    footerEmoji?: string;
    className?: string; // For optional custom styling
  }
  
  const InfoCard: React.FC<InfoCardProps> = ({
    title,
    mainContent,
    footer,
    footerEmoji,
    className = "",
  }) => {
    return (
      <div
        className={`bg-white p-6 rounded-3xl shadow-md flex flex-col justify-between ${className}`}
      >
        <h2 className="text-sm md:text-lg font-medium text-gray-400">{title}</h2>
        <div className="text-2xl md:text-5xl font-bold my-4">{mainContent}</div>
        {footer && (
          <div className="text-sm text-gray-500">
            {footer} {footerEmoji && <span>{footerEmoji}</span>}
          </div>
        )}
      </div>
    );
  };
  
  export default InfoCard;