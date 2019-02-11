import React from "react";
import { Link } from 'react-router-dom';

const Articles = () => (
  <section>
    <div>
      <h1>
        <Link to="/article/1">Titre article 1</Link>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cum
        eveniet sapiente illum, cumque unde similique, omnis quam quae amet
        molestiae laboriosam optio eligendi delectus minima, sequi cupiditate
        numquam eius!
      </p>
    </div>
    <div>
      <h1>Titre article 2</h1>
      <p>
        Odit perferendis velit incidunt dignissimos numquam consequatur
        quibusdam voluptatem animi tenetur assumenda id unde suscipit provident
        expedita doloribus est ullam quaerat, nisi fugiat. Tempora error
        voluptatum recusandae porro culpa quaerat.
      </p>
    </div>
    <div>
      <h1>Titre article 3</h1>
      <p>
        Enim fugiat nobis quia magni aut quidem aperiam, soluta accusantium
        vitae, nostrum repudiandae eligendi quaerat pariatur, omnis dolorem
        culpa obcaecati provident iste vero nesciunt iusto necessitatibus
        impedit deleniti! Unde, deleniti!
      </p>
    </div>
    <div>
      <h1>Titre article 4</h1>
      <p>
        Fuga enim fugiat corporis nisi aspernatur, in ipsa excepturi dignissimos
        voluptatum! Doloribus est beatae, magnam neque eveniet cumque nulla
        porro cupiditate, odio vitae rem fugiat atque assumenda a! Magni,
        reprehenderit!
      </p>
    </div>
  </section>
);

export default Articles;
