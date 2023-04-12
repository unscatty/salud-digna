export default function SaludEstudios({ tab }) {
  return (
    <>
      <div className="card p-3 mb-2">
        <Calendar />
      </div>
      <SaludMainCard tab={tab}>
        <EstudiosList />
      </SaludMainCard>
    </>
  );
}
