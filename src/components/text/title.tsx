import './text.css';

function Title({ children }: { children: React.ReactNode }) {
  return <div className="title">{children}</div>;
}

export default Title;
