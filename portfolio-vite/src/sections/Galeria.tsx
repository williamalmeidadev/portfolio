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

  return (
    <div className="sobre-galeria-focus">
      <div className="galeria-principal">
        <img
          src={imagens[ativa].src}
          alt={imagens[ativa].descricao}
          style={{ opacity: 1, transition: 'opacity 0.25s' }}
        />
        <div className="descricao-imagem">{imagens[ativa].descricao}</div>
        {imagens[ativa].premiacao && (
          <a
            id="btnPremiacao"
            href={imagens[ativa].premiacao}
            target="_blank"
            rel="noopener noreferrer"
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
            onClick={() => setAtiva(i)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};
