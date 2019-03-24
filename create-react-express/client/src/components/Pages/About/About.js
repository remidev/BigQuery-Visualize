import React from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Card,
  Icon,
  Image,
  Accordion,
} from "semantic-ui-react";
import "./About.css";

class About extends React.Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state

    return (
      <div>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Card>
              <Image src="/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>Kevin</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Card>
              <Image src="/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>Theo</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        <Divider vertical>&</Divider>
      </Segment>

<Accordion>
<Accordion.Title
  active={activeIndex === 0}
  index={0}
  onClick={this.handleClick}
>
  <Icon name='dropdown' />
  Question
</Accordion.Title>
<Accordion.Content active={activeIndex === 0}>
  <p>
    Answer
  </p>
</Accordion.Content>

<Accordion.Title
  active={activeIndex === 1}
  index={1}
  onClick={this.handleClick}
>
  <Icon name='dropdown' />
  Question
</Accordion.Title>
<Accordion.Content active={activeIndex === 1}>
  <p>
   Answer
  </p>
</Accordion.Content>

<Accordion.Title
  active={activeIndex === 2}
  index={2}
  onClick={this.handleClick}
>
  <Icon name='dropdown' />
  Question
</Accordion.Title>
<Accordion.Content active={activeIndex === 2}>
  <p>
    Answer
  </p>
  <p>
  Answer
  </p>
</Accordion.Content>

<Accordion.Title
  active={activeIndex === 3}
  index={3}
  onClick={this.handleClick}
>
  <Icon name='dropdown' />
  Question
</Accordion.Title>
<Accordion.Content active={activeIndex === 3}>
  <p>
   Answer
  </p>
</Accordion.Content>

<Accordion.Title
  active={activeIndex === 4}
  index={4}
  onClick={this.handleClick}
>
  <Icon name='dropdown' />
  Question
</Accordion.Title>
<Accordion.Content active={activeIndex === 4}>
  <p>
   Answer
  </p>
</Accordion.Content>

<Accordion.Title
  active={activeIndex === 5}
  index={5}
  onClick={this.handleClick}
>
  <Icon name='dropdown' />
  Question
</Accordion.Title>
<Accordion.Content active={activeIndex === 5}>
  <p>
   Answer
  </p>
</Accordion.Content>

<Accordion.Title
  active={activeIndex === 6}
  index={6}
  onClick={this.handleClick}
>
  <Icon name='dropdown' />
  Question
</Accordion.Title>
<Accordion.Content active={activeIndex === 6}>
  <p>
   Answer
  </p>
</Accordion.Content>

<Accordion.Title
  active={activeIndex === 7}
  index={7}
  onClick={this.handleClick}
>
  <Icon name='dropdown' />
  Question
</Accordion.Title>
<Accordion.Content active={activeIndex === 7}>
  <p>
   Answer
  </p>
</Accordion.Content>

<Accordion.Title
  active={activeIndex === 8}
  index={8}
  onClick={this.handleClick}
>
  <Icon name='dropdown' />
  Question
</Accordion.Title>
<Accordion.Content active={activeIndex === 8}>
  <p>
   Answer
  </p>
</Accordion.Content>
</Accordion>
</div>
    );
  }
}

export default About;
