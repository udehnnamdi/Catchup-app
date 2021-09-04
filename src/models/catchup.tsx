class Catchup {
    id: string;
    image: string;
    title: string;
    location: string;
    description: string;
  
    constructor(imageX: string, titleX:string, locationX:string, descriptionX:string) {
      this.image = imageX;
      this.title = titleX;
      this.location = locationX;
      this.description = descriptionX
      this.id = new Date().toISOString();
    }
  }
  
  export default Catchup;