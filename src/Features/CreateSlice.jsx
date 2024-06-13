import { createSlice } from "@reduxjs/toolkit";

//Create your Slice for multiple state management
const cart = createSlice({
    name:'Cart',
    initialState:{
        data:[
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdpDyssp0_vdOhksOs-sCeU9_J2o9OpV-GA&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfW3lR3U20GAWCQT-X8vo05_eLAtuQwX-TA&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2a5asc1HUOLi5SfeQBcaEHu9mmwBMLEhqqA&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLDIJtKEmWiJfHQDTvcEY7VQUqBBb8zYgqw&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqYpi51AKG1ILbQKiwVIIMwwBqe5RLIpang&usqp=CAU"
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images": [
                    "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg",
                    "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-2.jpg",
                    "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-4.jpg",
                    "https://fdn.gsmarena.com/imgroot//reviews/17/apple-iphone-x/lifestyle/-728w2/gsmarena_017.jpg",
                    "https://fdn.gsmarena.com/imgroot//reviews/17/apple-iphone-x/lifestyle/-728w2/gsmarena_010.jpg"
                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
                "images": [
                    "https://admin.hyperce.io/assets/thumbnail__12__preview.jpg?w=800"
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
                "images": [
                    "https://www.91-img.com/gallery_images_uploads/a/3/a39c84765fa13bd68fef7b2f3de2080f3f57750a.jpg?tr=h-550,w-0,c-at_max",
                    "https://www.91-img.com/gallery_images_uploads/7/c/7c69d8f549e0047166b1b494e43feecc8fb19028.jpg?tr=h-550,w-0,c-at_max",
                    "https://www.91-img.com/gallery_images_uploads/1/e/1ef5595f981e383d6ff4aeebcaff009f53637398.jpg?tr=h-550,w-0,c-at_max",
                    "https://www.91-img.com/gallery_images_uploads/6/9/69adaaf86434bcf0f3caa7e696cc3c07b7159856.jpg?tr=h-550,w-0,c-at_max",
                    "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-f19-1.jpg"
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
                "images": [
                    "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-1.jpg",
                    "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-2.jpg"
                ]
            }
        ]
    },
    reducers:{

        //Function for incrementing the quantity of the products in the cart
        handleInce:(state, actions)=>{
                        const data = state.data.find((p) => p.id === actions.payload);
                        if (data) {
                          data.quantity = (data.quantity || 1) + 1;
                        }
        },
        //Function for decreamenting the quantity of the products in the cart
        handleDece:(state, actions)=>{
            const data = state.data.find((p) => p.id === actions.payload);
            if (data && data.quantity > 1) {
              data.quantity -= 1;
            }
        },
        //Function for removing the product in the cart
        handleRemoves:(state,actions)=>{
           state.data =  state.data.filter((element) => element.id !== actions.payload);
        }
    }
})

export const {handleInce,handleDece,handleRemoves} = cart.actions;
export default cart.reducer;