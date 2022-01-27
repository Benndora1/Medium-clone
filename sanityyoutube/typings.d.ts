export interface Post {
   _id: string;
   _createdAt: string;
   title: string;
   author: {
       name: string;
       image: string;
   };
   description: string;
   mainImage: {
       asset: {
           urs: string;
       };
   };
   slugs: {
       current: string;
   };
   body: [object];
} 