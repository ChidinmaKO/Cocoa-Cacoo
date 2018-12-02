import React from 'react';
import { Grid, GridCol } from 'griz';
import Header from './Header';
import List from './List';
import Button from './Button';
import { FloatRight, LineDivide, Avatar } from './Util';

const Details = () => (
  <React.Fragment>
    <Header>
      <li>Manage Projects</li>
      <li>me@gmail.com</li>
      <li>Logout</li>
    </Header>
    <Grid responsiveSm gutterWidth="60">
      <GridCol column="70">
        <Grid gutterless>
          <GridCol>
            <h4>My Projects</h4>
          </GridCol>
          <GridCol>
            <FloatRight>
              <Button type="button">Create</Button>
            </FloatRight>
          </GridCol>
        </Grid>
        <List>
          <li>
            <details>
              <summary>
                <LineDivide spaced>
                  <h4>Project Name</h4>
                  <span role="button">Delete</span>
                </LineDivide>
              </summary>
              <div>
                <Grid responsiveMd>
                  <GridCol column="32">
                    <img src="https://placehold.it/120" alt="project" />
                  </GridCol>
                  <GridCol>
                    <h4>Project Title 1</h4>
                    <time>Mon, 10 Aug 2009 17:00:00 +0900</time>
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
          <li>
            <details>
              <summary>
                <LineDivide spaced>
                  <h4>Project Name</h4>
                  <span role="button">Delete</span>
                </LineDivide>
              </summary>
              <div>
                <Grid responsiveMd>
                  <GridCol column="32">
                    <img src="https://placehold.it/120" alt="project" />
                  </GridCol>
                  <GridCol>
                    <h4>Project Title 2</h4>
                    <time>Mon, 10 Aug 2009 17:00:00 +0900</time>
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
        </List>
      </GridCol>
      <GridCol>
        <Grid gutterless>
          <GridCol>
            <h4>Active Users</h4>
          </GridCol>
        </Grid>
        <List padded>
          <li>
            <LineDivide>
              <Avatar src="http://placehold.it/40" alt="img" />
              <h5>me2@gmail.com</h5>
            </LineDivide>
          </li>
          <li>
            <LineDivide>
              <Avatar src="http://placehold.it/40" alt="img" />
              <h5>me2@gmail.com</h5>
            </LineDivide>
          </li>
          <li>
            <LineDivide>
              <Avatar src="http://placehold.it/40" alt="img" />
              <h5>me2@gmail.com</h5>
            </LineDivide>
          </li>
          <li>
            <LineDivide>
              <Avatar src="http://placehold.it/40" alt="img" />
              <h5>me2@gmail.com</h5>
            </LineDivide>
          </li>
          <li>
            <LineDivide>
              <Avatar src="http://placehold.it/40" alt="img" />
              <h5>me2@gmail.com</h5>
            </LineDivide>
          </li>
        </List>
      </GridCol>
    </Grid>
  </React.Fragment>
);


export default Details;
