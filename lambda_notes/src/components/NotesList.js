import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

export default class NotesList extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 1,
          title: "Note 1",
          note:
            "Puppy kitty ipsum dolor sit good dog tigger good boy furry teeth purr lazy cat run fast fish critters string."
        },
        {
          id: 2,
          title: "Note 2",
          note:
            "Ferret walk toy kibble kitten cockatiel feeder fetch Rover maine coon cat speak harness whiskers mouse."
        },
        {
          id: 3,
          title: "Note 3",
          note:
            "Food bird food bark left paw vaccine litter water catch dinnertime food dragging. "
        },
        {
          id: 4,
          title: "Note 4",
          note:
            "Dog cockatiel smooshy gimme five wagging throw vitamins stripes kitten bedding dog house Buddy behavior ferret yawn scratcher tongue."
        },
        {
          id: 5,
          title: "Note 5",
          note:
            "Rover dinnertime aquatic biscuit stay tabby kibble string run catch bark critters pet supplies."
        },
        {
          id: 6,
          title: "Note 6",
          note: "Yawn run fast aquarium Tigger brush Tigger speak pet."
        },
        {
          id: 7,
          title: "Note 7",
          note:
            "Wag Tail tuxedo run bedding head chew food purr drool kisses carrier chirp toy ID tag slobbery smooshy."
        },
        {
          id: 8,
          title: "Note 8",
          note:
            "Small Animals crate chirp canary furry vaccination kitty tongue wet nose nap ball feeder heel dog house lazy cat tabby harness puppy. "
        },
        {
          id: 9,
          title: "Note 9",
          note:
            "Pet Food play play dead licks speak heel run fast parakeet fluffy string walk mouse fish hamster kisses play dead."
        }
      ]
    };
  }
  render() {
    return (
      <Container className="my-5">
        <Row>
          <h3 className="header">Your Notes:</h3>
        </Row>
        <Row>
          {this.state.notes.map(note => {
            return (
              <Col sm={4}>
                <Link className="card-link" to={`/viewNotes/${note.id}`}>
                  <Card className="note pb-3">
                    <CardBody>
                      <CardTitle>{note.title}</CardTitle>
                      <hr />
                      <CardText>{note.note}</CardText>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
