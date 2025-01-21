interface InfoCardProps {
    title: string;
    mainContent: React.ReactNode;
    footerText?: string;
    footerEmoji?: string;
    className?: string; // For optional custom styling
  }
  
  const InfoCard: React.FC<InfoCardProps> = ({
    title,
    mainContent,
    footerText,
    footerEmoji,
    className = "",
  }) => {
    return (
      <div
        className={`bg-white p-4 rounded-lg shadow-md text-center ${className}`}
      >
        <h2 className="text-sm font-medium text-gray-500">{title}</h2>
        <div className="text-2xl font-bold my-4">{mainContent}</div>
        {footerText && (
          <p className="text-sm text-gray-500">
            {footerText} {footerEmoji && <span>{footerEmoji}</span>}
          </p>
        )}
      </div>
    );
  };
  
  export default InfoCard;