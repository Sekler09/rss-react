import React, { Component, createRef, SyntheticEvent } from 'react';

export default class Form extends Component {
  nameRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  selectRef = createRef<HTMLSelectElement>();
  checkboxRef = createRef<HTMLFieldSetElement>();
  sexRef = createRef<HTMLFieldSetElement>();
  fileRef = createRef<HTMLInputElement>();

  handleOnSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(
      Array.from(this.checkboxRef.current?.children as HTMLCollection)
        .filter((el) => el.tagName == 'INPUT')
        .filter((el) => (el as HTMLInputElement).checked)
        .map((el) => (el as HTMLInputElement).name)
    );
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <fieldset>
          <legend>Pet</legend>
          <input type="text" placeholder="Pet`s name" required ref={this.nameRef} />
          <input type="date" placeholder="Pet`s birth date" required ref={this.dateRef} />
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
          <fieldset ref={this.sexRef}>
            <legend>Sex:</legend>
            <input type="radio" checked name="sex" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="sex" id="female" />
            <label htmlFor="female">Female</label>
          </fieldset>
          <fieldset>
            <legend>Upload photo</legend>
            <input type="file" name="Photo" id="photo" ref={this.fileRef} />
          </fieldset>
          <input type="submit" value="Add" />
        </fieldset>
      </form>
    );
  }
}
