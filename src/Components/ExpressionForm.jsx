import React, { useState } from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";

const ExpressionForm = () => {
  const initialRule = {
    key: "age",
    output: {
      value: 60,
      operator: ">=",
      score: 50,
    },
  };
  const [rules, setRules] = useState([initialRule]);
  const [combinator, setCombinator] = useState("and");

  const handleAddExpression = () => {
    setRules([
      ...rules,
      {
        key: "age",
        output: {
          value: 0,
          operator: ">=",
          score: 0,
        },
      },
    ]);
  };

  const handleDeleteExpression = (index) => {
    if (rules.length === 1) {
      alert("Cannot delete the fisrt rule.");
      return;
    }
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRules = [...rules];
    updatedRules[index][field] = value;
    setRules(updatedRules);
  };

  const handleOutputChange = (index, field, value) => {
    const updatedRules = [...rules];
    updatedRules[index].output[field] = value;
    setRules(updatedRules);
  };

  const handleCombinatorChange = (value) => {
    setCombinator(value);
  };

  const handleSubmit = () => {
    const filteredRules = rules.filter((rule) => rule.key !== "");

    if (filteredRules.length === 0) {
      alert("Please add at least one expression before submitting.");
      return;
    }

    const output = {
      rules: filteredRules,
      combinator: combinator || "and",
    };

    console.log(output);
  };

  return (
    <Container>
      <Form>
        {rules.map((rule, index) => (
          <Row
            key={index}
            className="d-flex justify-content-center align-items-center"
          >
            <Col xs={12} sm={6} md={4} lg={2}>
              <Form.Group controlId={`ruleType-${index}`}>
                <div className="mb-3">
                  <Form.Label className="fw-bold">Rule Type</Form.Label>
                  <Form.Select
                    value={rule.key}
                    onChange={(e) =>
                      handleInputChange(index, "key", e.target.value)
                    }
                  >
                    <option disabled>Select Rule Type</option>
                    <option value="age">Age</option>
                    <option value="credit_score">Credit Score</option>
                    <option value="account_balance">Account Balance</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
              <Form.Group controlId={`operator-${index}`}>
                <div className="mb-3">
                  <Form.Label className="fw-bold">Operator</Form.Label>
                  <Form.Select
                    value={rule.output.operator}
                    onChange={(e) =>
                      handleOutputChange(index, "operator", e.target.value)
                    }
                  >
                    <option disabled>Select Operator</option>
                    <option value=">">{">"}</option>
                    <option value="<">{"<"}</option>
                    <option value=">=">{">="}</option>
                    <option value="<=">{"<="}</option>
                    <option value="=">{"="}</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
              <Form.Group controlId={`value-${index}`}>
                <div className="mb-3">
                  <Form.Label className="fw-bold">Value</Form.Label>
                  <Form.Control
                    type="number"
                    value={rule.output.value}
                    onChange={(e) =>
                      handleOutputChange(index, "value", e.target.value)
                    }
                  />
                </div>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
              <Form.Group controlId={`score-${index}`}>
                <div className="mb-3">
                  <Form.Label className="fw-bold">Score</Form.Label>
                  <Form.Control
                    type="number"
                    value={rule.output.score}
                    onChange={(e) =>
                      handleOutputChange(index, "score", e.target.value)
                    }
                  />
                </div>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
              <Button
                variant="danger"
                className="mt-3"
                onClick={() => handleDeleteExpression(index)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
        <Row className="mt-4 d-flex justify-content-center">
          <Col xs={12} sm={12} md={6} lg={4}>
            <Form.Group controlId="combinator">
              <Form.Label className="fw-bold">Combinator</Form.Label>
              <Form.Select
                className="w-100  mb-3"
                value={combinator}
                onChange={(e) => handleCombinatorChange(e.target.value)}
              >
                <option value="and">AND</option>
                <option value="or">OR</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center  ">
            <Button
              variant="primary"
              className="me-2 me-md-4 "
              onClick={handleAddExpression}
            >
              Add Expression
            </Button>
            <Button variant="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ExpressionForm;
