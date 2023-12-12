type TBody = { children: React.ReactElement[] | React.ReactNode };

const Body: React.FC<TBody> = ({ children }) => {
  return (
    <section className="bg-gradient-to-br from-[#8F4791] via-[#F7A050] to-orange-400">
      {children}
    </section>
  );
};

export default Body;
