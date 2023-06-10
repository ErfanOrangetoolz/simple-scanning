export const generateRandom = (min = 0, max = 100) => {
  // find diff
  let difference = max - min;
  // generate random number
  let rand = Math.random();
  // multiply with difference
  rand = Math.floor(rand * difference);
  // add with min value
  rand = rand + min;
  return rand;
};

export const SkeletonCircle = () => {
  return <div>circle skeleton</div>;
};
export const SkeletonRectangle = ({ height = "10px", width = "10px" }) => {
  return (
    <div
      className='gl_skelton_wr'
      style={{
        backgroundColor: "#ddd",
        height: height,
        width: width,
        margin: "2px",
      }}
    ></div>
  );
};

const TableSkeleton = ({ rows, checkBox }) => {
  const renderView = () => {
    const view = [];
    let length = rows.length;
    if (checkBox) {
      length += 1;
    }
    for (let index = 0; index < 7; index++) {
      view.push(
        <tr colSpan={length} key={index}>
          {eachColumn(length, checkBox)}
        </tr>
      );
    }
    return view;
  };

  const eachColumn = (length, checkBox) => {
    const view = [];
    for (let index = 0; index < length; index++) {
      if (index === 0 && checkBox) {
        view.push(
          <td key={index}>
            <SkeletonRectangle height='20px' width='20px' />
          </td>
        );
      } else {
        view.push(
          <td key={index}>
            <SkeletonRectangle height='10px' width={generateRandom(50)} />
          </td>
        );
      }
    }
    return view;
  };

  return <tbody>{renderView()}</tbody>;
};
export default TableSkeleton;
