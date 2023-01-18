export type ManType = {
  name: string;
  age: number;
  lessons: Array<{ title: string }>;
  address: {
    street: {
      title: string;
    };
  };
};

type PropsType = {
  title: string;
  man: ManType;
  car: { model: string };
};

export const ManComponent: React.FC<PropsType> = (props) => {
  const { title, man, ...rest } = props;

  return (
    <div>
      <h1>{title}</h1>
      <div>{man.name}</div>
    </div>
  );
};
