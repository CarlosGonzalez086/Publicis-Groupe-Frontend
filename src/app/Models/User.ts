export class User{
    constructor(
        public id : number,
        public nombre : string,
        public apaterno : string,
        public amaterno : string,
        public telefono : string,
        public fecha_nacimiento : string,
        public genero : string,
        public rol : string,
        public email : string,
        public password : string,
        public usuario : string
    ) {
        
    }
}