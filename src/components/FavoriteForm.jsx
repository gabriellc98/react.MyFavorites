import FormTitle from "./FormTitle";
import FormLegend from "./FormLegend";
import FormInput from "./FormInput";
import FormFieldSet from "./FormFieldSet";
import FormButton from "./FormButton";
import FormList from "./FormList";
import { useState } from "react";
import StarInput from "./StarInput";

export function FavoriteForm({ types, addFavorite }) {
  const [starRating, setStarRating] = useState(0);

  function handleFormSubmition(formContent) {
    formContent.preventDefault();
    const formData = new FormData(formContent.target);

    if (!formData.get("title-name") || !formData.get("title-type")) {
      alert("Please fill in both title and type");
      return;
    }

    const favorite = {
      name: formData.get("title-name"),
      id: new Date().getTime(),
      cover: formData.get("title-cover") || "no-poster.jfif",
      type: types.find(
        (type) => String(type.id) === String(formData.get("title-type")),
      ),
      rating: starRating,
    };

    console.log("NEW FAVORITE", favorite);
    addFavorite(favorite);
    setStarRating(0);
    formContent.target.reset();
  }

  return (
    <form
      onSubmit={handleFormSubmition}
      className="bg-[#241935] border border-[#4d4950] px-8 py-6 rounded-2xl w-sm max-w-9/10 m-auto my-12"
      // action={handleFormSubmition}
    >
      <FormTitle>Add a favorite title</FormTitle>
      <div className="flex flex-col gap-4">
        <FormFieldSet>
          <FormLegend>Title name:</FormLegend>
          <FormInput
            type="text"
            id="title-name"
            name="title-name"
            placeholder="Type the title name"
          />
        </FormFieldSet>
        <FormFieldSet>
          <FormLegend>Title cover (optional):</FormLegend>
          <FormInput
            type="text"
            id="title-cover"
            name="title-cover"
            placeholder="https://..."
          />
        </FormFieldSet>
        <FormFieldSet>
          <FormLegend>Title type:</FormLegend>
          <FormList id="title-type" name="title-type" types={types}></FormList>
        </FormFieldSet>
        <FormFieldSet>
          <FormLegend>Title rating:</FormLegend>
          <StarInput starRating={starRating} onChange={setStarRating} />
        </FormFieldSet>
      </div>
      <div className="text-center mt-8">
        <FormButton>Add Favorite</FormButton>
      </div>
    </form>
  );
}
