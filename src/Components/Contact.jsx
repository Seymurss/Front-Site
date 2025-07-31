import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import '../assets/Css/Contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', 
    surname: '',
    subject: '',
    message: '',
  });

  const [toast, setToast] = useState({ show: false, message: '', bg: 'success' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_s3zjpra',
        'template_l9r1r2e',
        {
          name: formData.name,
          surname: formData.surname,
          subject: formData.subject,
          message: formData.message,
        },
        'ezp1duDRT7tIjfYXE'
      )
      .then(() => {
        setToast({ show: true, message: 'Message sent successfully!', bg: 'success' });
        setFormData({
          name: '',
          surname: '',
          subject: '',
          message: '',
        });
      })
      .catch(() => {
        setToast({ show: true, message: 'Failed to send message. Please try again.', bg: 'danger' });
      });
  };

  return (
    <div className="Contact">
      {/* Toast bildiriş */}
      <Toast
        onClose={() => setToast({ ...toast, show: false })}
        show={toast.show}
        delay={3000}
        autohide
        bg={toast.bg}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          minWidth: '250px',
          zIndex: 9999,
        }}
      >
        <Toast.Body className="text-white">{toast.message}</Toast.Body>
      </Toast>

      <div className="line">
        <div className="leftbox">
          <p>GET IN TOUCH</p>
          <h5>
            Let's make your <br /> brand brilliant!
          </h5>
          <span>
            If you would like to work with us or just want to get in <br />
            touch, we’d love to hear from you!
          </span>
          <h4>+994 55 949 16 33</h4>
        </div>

        <div className="rightbox">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Row>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="animated-hover-button">
              <span>SEND A MESSAGE</span>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
