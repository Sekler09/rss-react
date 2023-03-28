import { Component, createRef, RefObject, SyntheticEvent } from 'react';
import './Form.css';

export interface cardType {
  name: string;
  date: string;
  type: string;
  character: string[];
  sex: 'Male' | 'Female';
  photo: File;
}

interface errorsType {
  name: boolean;
  date: boolean;
  character: boolean;
  photo: boolean;
}

interface FormProps {
  afterSumbit: (card: cardType) => void;
}
interface FormState {
  errors: errorsType;
}

export default class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      errors: {
        name: true,
        date: true,
        character: true,
        photo: true,
      },
    };
  }
  nameRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  selectRef = createRef<HTMLSelectElement>();
  checkboxRef = createRef<HTMLFieldSetElement>();
  sexRef = createRef<HTMLFieldSetElement>();
  fileRef = createRef<HTMLInputElement>();
  formRef = createRef<HTMLFormElement>();

  handleClearForm = () => {
    this.formRef.current?.reset();
  };

  getResultFromRefWithMultipleInput = (
    ref: RefObject<HTMLFieldSetElement>,
    field: keyof HTMLInputElement
  ): string[] => {
    return Array.from(ref.current?.children as HTMLCollection)
      .filter((el) => el.tagName == 'INPUT')
      .filter((el) => (el as HTMLInputElement).checked)
      .map((el) => (el as HTMLInputElement)[field] as string);
  };

  handleOnSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (this.checkErrors()) {
      this.props.afterSumbit({
        name: this.nameRef.current?.value as string,
        date: this.dateRef.current?.value as string,
        type: this.selectRef.current?.value as string,
        character: this.getResultFromRefWithMultipleInput(this.checkboxRef, 'name'),
        sex: this.getResultFromRefWithMultipleInput(this.sexRef, 'id')[0] as 'Male' | 'Female',
        photo: Array.from(this.fileRef.current?.files as FileList)[0],
      });
      this.handleClearForm();
    }
  };

  checkErrors = (): boolean => {
    const currentErrors: errorsType = {
      name: this.isValidName(this.nameRef.current?.value as string),
      date: !!this.dateRef.current?.value,
      character: this.isValidCharacter(this.checkboxRef),
      photo: this.isValidPhoto(this.fileRef),
    };
    this.setState({ ...this.state, errors: currentErrors });
    return !Object.values(currentErrors).filter((er) => !er).length;
  };

  isValidName = (str: string): boolean => {
    return str.trim().length >= 3 && str[0] === str[0].toUpperCase();
  };

  isValidCharacter = (ref: RefObject<HTMLFieldSetElement>): boolean => {
    return !!this.getResultFromRefWithMultipleInput(ref, 'name').length;
  };

  isValidPhoto = (ref: RefObject<HTMLInputElement>): boolean => {
    return ref.current?.files?.length
      ? Array.from(ref.current?.files as FileList).map((file) => !!file.type.match(/^image\//))[0]
      : false;
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} ref={this.formRef}>
        <fieldset>
          <legend>Pet</legend>
          <input type="text" placeholder="Pet`s name" ref={this.nameRef} />
          <p className="error">
            {!this.state.errors.name && 'Name must start with capital letter and be at least 3 '}
          </p>
          <input type="date" placeholder="Pet`s birth date" ref={this.dateRef} />
          <p className="error">{!this.state.errors.date && 'Date is required'}</p>
          <select name="Species" id="" ref={this.selectRef}>
            <option>Cat</option>
            <option>Dog</option>
            <option>Parrot</option>
            <option>Rat</option>
            <option>Hamster</option>
            <option>Snake</option>
            <option>Other..</option>
          </select>
          <fieldset ref={this.checkboxRef}>
            <legend>Character</legend>
            <input type="checkbox" name="Kind" id="kind" />
            <label htmlFor="kind">Kind</label>
            <input type="checkbox" name="Angry" id="angry" />
            <label htmlFor="angry">Angry</label>
            <input type="checkbox" name="Hungry" id="hungry" />
            <label htmlFor="hungry">Hungry</label>
            <input type="checkbox" name="Funny" id="funny" />
            <label htmlFor="funny">Funny</label>
            <input type="checkbox" name="Lazy" id="lazy" />
            <label htmlFor="lazy">Lazy</label>
            <input type="checkbox" name="Cute" id="cute" />
            <label htmlFor="cute">Cute</label>
          </fieldset>
          <p className="error">{!this.state.errors.character && 'At least one must be chosen'}</p>
          <fieldset ref={this.sexRef}>
            <legend>Sex:</legend>
            <input type="radio" readOnly checked name="sex" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" readOnly name="sex" id="female" />
            <label htmlFor="female">Female</label>
          </fieldset>
          <fieldset>
            <legend>Upload photo</legend>
            <input type="file" name="Photo" id="photo" ref={this.fileRef} />
          </fieldset>
          <p className="error">{!this.state.errors.photo && 'File must be image'}</p>
          <input type="submit" value="Add" />
        </fieldset>
      </form>
    );
  }
}
