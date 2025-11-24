export type NivelProveedor = "aspirante" | "bronce" | "plata" | "oro";

export type EstadoTarea = "pendiente" | "aceptada" | "en_curso" | "completada" | "cancelada";

export type CategoriaServicio =
  | "recados"
  | "mascotas"
  | "ayuda_domestica"
  | "vehiculos"
  | "acompanamiento"
  | "soporte_hogar";

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  direccion?: string;
  fotoPerfil?: string;
  tareasCompletadas: number;
  horasAhorradas: number;
  createdAt: Date;
}

export interface Proveedor {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  dni: string;
  fotoPerfil?: string;
  fotoSelfie?: string;
  nivel: NivelProveedor;
  puntuacion: number;
  serviciosCompletados: number;
  serviciosOfrecidos: CategoriaServicio[];
  zonasTrabajo: string[];
  disponible: boolean;
  tasaAceptacion: number;
  cancelaciones: number;
  tiempoRespuesta: number;
  ingresos: number;
  createdAt: Date;
}

export interface Tarea {
  id: string;
  usuarioId: string;
  usuario: Usuario;
  proveedorId?: string;
  proveedor?: Proveedor;
  categoria: CategoriaServicio;
  titulo: string;
  descripcion: string;
  direccion: string;
  zona: string;
  horarioPreferido: string;
  precio?: number;
  estado: EstadoTarea;
  valoracion?: number;
  comentario?: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface Valoracion {
  id: string;
  tareaId: string;
  usuarioId: string;
  proveedorId: string;
  puntuacion: number;
  comentario: string;
  createdAt: Date;
}

export interface Estadisticas {
  tareasHoy: number;
  tareasMes: number;
  proveedoresActivos: number;
  usuariosActivos: number;
  ingresosMes: number;
}
