import React from "react";

import tshirtImage from "../../assets/tshirt.png";

import SellerInfo from "../SellerInfo";
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, sit.
      Minus, cumque. Ea voluptas laborum repudiandae harum tenetur accusantium
      consequuntur similique rerum? Voluptate molestiae magnam vitae minus.
      Similique, id blanditiis.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi in
      doloremque debitis ducimus, libero tempora eum voluptates mollitia earum
      obcaecati accusantium suscipit iusto quidem minus voluptatem possimus id
      dignissimos aperiam?
    </p>
  </Description>
);

export default Product;
