"use server";

export default async function postFeedback(ratings: any) {
  let result;
  try {
    let data = await fetch(`${process.env.FEEDBACK_API_URL}/post_feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_id: "testing_email@gmail.com",
        Overall: ratings["overall"],
        "Business&Consumers": ratings["businessAndConsumers"],
        PublicSafety: ratings["publicSafety"],
        Transportation: ratings["transportation"],
        "Culture&Recreation": ratings["cultureAndRecreation"],
        "Trash&Recycling": ratings["trashAndRecycling"],
        Environment: ratings["environment"],
        "Sidewalks, Streets, Highways": ratings["sidewalksStreetsHighways"],
        Noise: ratings["noise"],
      }),
    });
    const result = await data.json();
    return "Feedback data insertion success";
  } catch (error) {
    result = { message: `Failed: ` };
    console.log("result in error", result);
    return null;
  }
}
