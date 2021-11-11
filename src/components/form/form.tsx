import './form.module.css';

function getElementValues(formNode: HTMLFormElement) {
  const thing = Object.getOwnPropertyNames(formNode.elements).reduce(
    (acc, index) => {
      return { ...acc, ...{ [index]: formNode.elements[index].value } };
    },
    {}
  );

  return thing;
}

export interface FormProps {
  onSubmit: (...arg: any) => any;
  children: JSX.Element;
}

export function Form({ onSubmit, children }: FormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const elementValues = getElementValues(event.target as HTMLFormElement);
        onSubmit(elementValues);
      }}
    >
      {children}
    </form>
  );
}

export default Form;
