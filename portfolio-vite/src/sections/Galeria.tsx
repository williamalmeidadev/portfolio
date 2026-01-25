import React, { useState } from 'react';

interface GaleriaImagem {
  src: string;
  descricao: string;
  premiacao?: string;
}

interface GaleriaProps {
  imagens: GaleriaImagem[];
}

export const Galeria: React.FC<GaleriaProps> = ({ imagens }) => {
  const [ativa, setAtiva] = useState(0);

  function handleThumbClick(i: number) {
    if (i !== ativa) setAtiva(i);
  }

  return (
    <div className="sobre-galeria-focus">
      <div className="galeria-principal">
        <img
          src={imagens[ativa].src}
          alt={imagens[ativa].descricao}
          style={{ opacity: 1, transition: 'opacity 0.25s', borderRadius: 16, boxShadow: '0 2px 16px #0004' }}
        />
        <div className="descricao-imagem">{imagens[ativa].descricao}</div>
        {imagens[ativa].premiacao && (
          <a
            id="btnPremiacao"
            href={imagens[ativa].premiacao}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-block', marginTop: 8 }}
          >
            Ver premiação
          </a>
        )}
      </div>
      <div className="galeria-stack">
        {imagens.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.descricao}
            className={i === ativa ? 'ativo' : ''}
            onClick={() => handleThumbClick(i)}
            style={{ cursor: 'pointer', border: i === ativa ? '2px solid var(--primary)' : '1px solid var(--border)', transition: 'border 0.2s' }}
          />
        ))}
      </div>
    </div>
  );
};
