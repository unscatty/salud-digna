export default function CitaList() {
  const appointments = [
    {
      id: 1,
      doctor: {
        name: 'Dr. Juan Perez',
        image:
          'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      subject: 'Consulta general',
      date: '2023-04-12T09:00:00',
    },
    {
      id: 2,
      doctor: {
        name: 'Dra. Maria Lopez',
        image:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      subject: 'Consulta nutricional',
      date: '2023-05-05T13:15:00',
    },
    {
      id: 3,
      doctor: {
        name: 'Dr. Alonso Martinez',
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      subject: 'Estudios de laboratorio',
      date: '2023-05-05T14:00:00',
    },
  ];

  return (
    <ul role="list" className="divide-y divide-gray-200">
      {appointments.map((appointment) => (
        <CitaItem key={appointment.id} appointment={appointment} />
      ))}
    </ul>
  );
}
