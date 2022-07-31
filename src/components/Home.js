import React, { useState, useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    // Mettre à jour le titre du document en utilisant l'API du navigateur
    document.title = `Accueil`;
  });
    return <h2>Page accueil</h2>;
  }