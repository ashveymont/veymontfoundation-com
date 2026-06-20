export default function PaperTexture() {
  return (
    <div
      aria-hidden="true"
      style={{
        position:           'fixed',
        inset:              0,
        zIndex:             1,
        pointerEvents:      'none',
        backgroundImage:    "url('/textures/paper-grain.png')",
        backgroundRepeat:   'repeat',
        backgroundSize:     '512px 512px',
        opacity:            'var(--texture-opacity, 0.5)' as unknown as number,
        mixBlendMode:       'multiply',
      }}
    />
  )
}
