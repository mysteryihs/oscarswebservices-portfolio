import React from 'react'
// import { Link } from 'gatsby'

const Feature1 = class extends React.Component {
    render() {
        return(
            <div class="wrapper">
                <div class="container">
                    <div class="row">
                        <section class="col-6 col-12-narrower feature">
                            <div class="image-wrapper first">
                                <a href="#" class="image featured first"><img src="../../pic01.jpg" alt="" /></a>
                            </div>
                            <header>
                                <h2>Semper magna neque vel<br />
                                adipiscing curabitur</h2>
                            </header>
                            <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                            sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
                            adipiscing elit. Curabitur vel sem sit.</p>
                            <ul class="actions">
                                <li><a href="#" class="button">Elevate my awareness</a></li>
                            </ul>
                        </section>
                        <section class="col-6 col-12-narrower feature">
                            <div class="image-wrapper">
                                <a href="#" class="image featured"><img src="../../pic02.jpg" alt="" /></a>
                            </div>
                            <header>
                                <h2>Amet lorem ipsum dolor<br />
                                sit consequat magna</h2>
                            </header>
                            <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                            sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
                            adipiscing elit. Curabitur vel sem sit.</p>
                            <ul class="actions">
                                <li><a href="#" class="button">Elevate my awareness</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feature1