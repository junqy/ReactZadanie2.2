import React, { Component } from "react";
import PersonInCrew from "./PersonInCrew";



class Persons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personList: [
        {
          imie: "Jan",
          nazwisko: "Nowak",
          wiek: 21,
          stopien: "Sierżant",
          adresEmail: "jan.nowak@gmail.com",
        },
        {
          imie: "wan",
          nazwisko: "Nowak",
          wiek: 21,
          stopien: "Sierżant",
          adresEmail: "jan.nowak@gmail.com",
        },
        {
          imie: "mann",
          nazwisko: "Nowak",
          wiek: 21,
          stopien: "Sierżant",
          adresEmail: "jan.nowak@gmail.com",
        }
      ],
      personAge: [21, 21, 21],
      imie: '',
      nazwisko: '',
      wiek: '',
      stopien: '',
      adresEmail: '',
    };
  }

  onChange(e) {
    var name = e.target.id;
    this.setState({
      [name]: e.target.value
    });
  }

  addPerson() {
    this.setState(state => {
      var persons = state.personList.slice(0);

        persons.push({
          imie: state.imie,
          nazwisko: state.nazwisko,
          wiek: state.wiek,
          stopien: state.stopien,
          adresEmail: state.adresEmail
        });

        var personsAge = state.personAge.slice(0);
        personsAge.push(parseInt(state.wiek))
        console.log(personsAge)
        console.log(persons)

      return { personList: persons, personAge: personsAge }
    })
  }

  average(tab){
    
  }

  filter(wiek){
    let lat = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    let wiekInt = parseInt(wiek);
    if(lat.includes(wiekInt)){
      return wiekInt + "lat"
    }else if(wiekInt%10 === 2 || wiekInt%10 === 3 || wiekInt%10 === 4){
      return wiekInt + "lata"
    }else return wiekInt + "lat"
  }

  render() {
    return (
      <div className="content">
        <h3>List of persons</h3>
        <div>
            {this.state.personList.map((person, key) => (
                <PersonInCrew
                  key={key}
                  imie={person.imie}
                  nazwisko={person.nazwisko}
                  wiek={this.filter(person.wiek)}
                  stopien={person.stopien}
                  adresEmail={person.adresEmail}
                />
            ))}
            [{this.state.personAge.map((number) => number + ", ")}]
            average= {(this.state.personAge.reduce(function(last,curr){
              return last + curr;
            })/this.state.personAge.length).toFixed(2)}
          </div>
              <h3>Add new person</h3>
              <div>
                <input type="text" placeholder="imie" id="imie" onChange={(e) => this.onChange(e)} />
                <input type="text" placeholder="nazwisko" id="nazwisko" onChange={(e) => this.onChange(e)} />
                <input type="number" placeholder="wiek" id="wiek" onChange={(e) => this.onChange(e)} />
                <input type="text" placeholder="stopien" id="stopien" onChange={(e) => this.onChange(e)} />
                <input type="text" placeholder="e-mail" id="adresEmail" onChange={(e) => this.onChange(e)} />
                <button variant="secondary" onClick={() => this.addPerson()}>Add person</button>
             </div>
      </div >
    );
  }

}

export default Persons;