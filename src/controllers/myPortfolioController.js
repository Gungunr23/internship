import { myPortfolioData } from "./myPortfolioData.js";
import fs from "fs";
import path from "path";

export const postPortfolioForm = (req, res) => {

    console.log("========== PORTFOLIO DATA ==========");
    console.log(req.body);
    console.log("====================================");

    myPortfolioData.name = req.body.name;
    myPortfolioData.role = req.body.role;
    myPortfolioData.dob = req.body.dob;
    myPortfolioData.address = req.body.address;
    myPortfolioData.phone = req.body.phone;
    myPortfolioData.email = req.body.email;
    myPortfolioData.about = req.body.about;

    myPortfolioData.skills = req.body.skills
        ? req.body.skills.split(",").map(skill => skill.trim())
        : [];

    myPortfolioData.github = req.body.github;
    myPortfolioData.linkedin = req.body.linkedin;

    const filePath = path.resolve(
        process.cwd(),
        "src",
        "controllers",
        "myPortfolioData.js"
    );

    const fileData = `export const myPortfolioData = ${JSON.stringify(
        myPortfolioData,
        null,
        4
    )};`;

    try {

        fs.writeFileSync(
            filePath,
            fileData,
            "utf-8"
        );

        console.log("Data save ho gaya hai.");

    } catch (err) {

        console.error("Data save nahi hua:", err);

    }

    res.redirect("/");
};