import React, { Component } from 'react';
import { Grid, GridCol } from 'griz';
import axios from 'axios';
import Header from './Header';
import List from './List';
import Button from './Button';
import { FloatRight, LineDivide, Avatar } from './Util';


const host = process.env.HOST;
const apikey = process.env.CACOO_API;

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      diagramList: []
    };
    this.deleteDiagram = this.deleteDiagram.bind(this);
  }

  /* eslint-disable no-console */
  componentDidMount() {
    axios.get(`${host}/diagrams.json?apiKey=${apikey}`)
      .then(response => {
        const { data: { result } } = response;
        this.setState({
          diagramList: result
        });
        // console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteDiagram(diagram) {
    const { diagramList } = this.state;
    this.setState({
      diagramList: diagramList.filter(item => item.diagramId !== diagram)
    });
    axios.get(`${host}/diagrams/${diagram}/delete.json?apiKey=${apikey}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { diagramList } = this.state;
    return (
      <React.Fragment>
        <Header>
          <li>Manage Projects</li>
          <li>me</li>
          <li>Logout</li>
        </Header>
        <Grid responsiveSm gutterWidth="60">
          <GridCol column="70">
            <Grid gutterless>
              <GridCol>
                <h4>My Projects</h4>
              </GridCol>
              {/* <GridCol>
                <FloatRight>
                  <Button type="button">Create</Button>
                </FloatRight>
              </GridCol> */}
            </Grid>
            <List>
              {diagramList.map(diagram => (
                <li key={diagram.diagramId}>
                  <details>
                    <summary>
                      <LineDivide spaced>
                        <h4>{ diagram.title }</h4>
                        <button onClick={() => this.deleteDiagram(diagram.diagramId)} type="button">Delete</button>
                      </LineDivide>
                    </summary>
                    <div>
                      <Grid responsiveMd>
                        <GridCol column="32">
                          <img src={diagram.imageUrl} alt="project" />
                        </GridCol>
                        <GridCol>
                          <h4>{ diagram.title }</h4>
                          <h6>
                            Folder Name:
                            { diagram.folderName }
                          </h6>
                          <time>{ diagram.created }</time>
                          <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                        </GridCol>
                      </Grid>
                    </div>
                  </details>
                </li>
              ))}
            </List>
          </GridCol>
          <GridCol>
            <Grid gutterless>
              <GridCol>
                <h4>User Information</h4>
              </GridCol>
            </Grid>
            <List padded>
              <li>
                <LineDivide>
                  <Avatar src="https://cacoo.com/account/fSSuxzncJY40cCJd/image/32x32" alt="img" />
                  <h5>
                    Name: Chidinma K.
                  </h5>
                </LineDivide>
              </li>
            </List>
          </GridCol>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Projects;
