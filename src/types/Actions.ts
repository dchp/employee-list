interface Action {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  shortText?: string;
}

export default Action;
