import React from "react"
import './Reviews.css'
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap'
import Person1 from '../utils/utils/img/person1.jpg'
import Person2 from '../utils/utils/img/person2.jpg'
import Person3 from '../utils/utils/img/person3.jpg'

export function Reviews() {
  return(
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row">
        <div className="col-lg-4">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  "Absolutely loved my dining experience here! The atmosphere was cozy, and the staff made me feel right at home. The pasta was perfectly cooked, and the flavors were incredible. Will definitely be coming back!"
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img src={ Person1 } className="img-fluid rounded-circle mx-3 shadow" alt="" />
              <CardTitle className="text-success"> Lauren bell </CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  "This is hands down the best restaurant in town! Fresh ingredients, a warm ambiance, and attentive service made for a memorable evening. The chef's special was out of this world—definitely a must-try!"
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img src={ Person2 } className="img-fluid rounded-circle mx-3 shadow" alt="" />
              <CardTitle className="text-success"> John Wick </CardTitle>
            </CardFooter>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card className="h-100 shadow">
            <CardBody>
              <div className="p-4">
                <CardText>
                  "A lovely spot with a welcoming vibe. The food was delicious, especially the desserts! I took my family here for a birthday dinner, and everyone enjoyed it. A fantastic place for any occasion!"
                </CardText>
              </div>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
              <img src={ Person3 } className="img-fluid rounded-circle mx-3 shadow" alt="" />
              <CardTitle className="text-success"> Ellyse perry </CardTitle>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}