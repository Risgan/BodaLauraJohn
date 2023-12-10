export interface Invitado {
    id: string;
    nombre: string;
    apellido: string;
    asistencia: boolean;
    bebida?: string;
    coctel?: string;
    entrada?: string;
    fuerte?: string;
}

export interface InvitadoPost extends Omit<Invitado, 'id'> {
}

export interface InvitadoCarta{
    bebida: string;
    coctel: string;
    entrada: string;
    fuerte: string;
}