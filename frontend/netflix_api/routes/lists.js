const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//Create
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!!");
  }
});

// //UPDATE

// router.put("/:id", verify, async (req, res) => {
//     if (req.user.isAdmin) {
//       try {
//         const updatedList = await List.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedList);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(403).json("You are not allowed!");
//     }
//   });
  
//   //DELETE
  
//   router.delete("/:id", verify, async (req, res) => {
//     if (req.user.isAdmin) {
//       try {
//         await List.findByIdAndDelete(req.params.id);
//         res.status(200).json("The List has been deleted...");
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(403).json("You are not allowed!");
//     }
//   });
  
//   //GET
  
//   router.get("/find/:id", verify, async (req, res) => {
//     try {
//       const List = await List.findById(req.params.id);
//       res.status(200).json(List);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   //GET RANDOM
  
//   router.get("/random", verify, async (req, res) => {
//     const type = req.query.type;
//     let List;
//     try {
//       if (type === "series") {
//         List = await List.aggregate([
//           { $match: { isSeries: true } },
//           { $sample: { size: 1 } },
//         ]);
//       } else {
//         List = await List.aggregate([
//           { $match: { isSeries: false } },
//           { $sample: { size: 1 } },
//         ]);
//       }
//       res.status(200).json(List);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   //GET ALL
  
//   router.get("/", verify, async (req, res) => {
//     if (req.user.isAdmin) {
//       try {
//         const Lists = await List.find();
//         res.status(200).json(Lists.reverse());
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(403).json("You are not allowed!");
//     }
//   });
  

module.exports = router;
