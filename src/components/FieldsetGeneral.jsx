const FieldsetGeneral = ({
  handleChangeInput,
  title,
  dateCollected,
  collectionNumber,
  collectors,
}) => {
  return (
    <fieldset>
      <legend>General</legend>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleChangeInput}
      />
      <label htmlFor="dateCollected">Date collected</label>
      <input
        type="date"
        id="dateCollected"
        name="dateCollected"
        value={dateCollected}
        onChange={handleChangeInput}
      />
      <label htmlFor="collectionNumber">Collector's number</label>
      <input
        type="text"
        id="collectionNumber"
        name="collectionNumber"
        value={collectionNumber}
        onChange={handleChangeInput}
      />
      <label htmlFor="collectors">Collector(s)</label>
      <input
        type="text"
        id="collectors"
        name="collectors"
        value={collectors}
        onChange={handleChangeInput}
      />
    </fieldset>
  );
};

export default FieldsetGeneral;
