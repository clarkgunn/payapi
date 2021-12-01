import './Form.module.css';

function getElementValues(formNode: HTMLFormElement) {
  const thing = Object.getOwnPropertyNames(formNode.elements).reduce(
    (acc, index: any) => {
      const element = formNode.elements[index] as HTMLInputElement;
      return {
        ...acc,
        ...{ [index]: element.value },
      };
    },
    {},
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
