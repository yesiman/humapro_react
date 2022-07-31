import React, { useState, useEffect } from 'react';
export default function Contact() {
  useEffect(() => {
  // Mettre à jour le titre du document en utilisant l'API du navigateur
  document.title = `Contact`;
});
    return <h2>Page contact</h2>;
  }