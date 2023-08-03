import React from 'react';

const OverviewCard = ({ title, number, icon, newNumber, endText, newNumberPrefix, newNumberSuffix, iconBG }) => {
  return (
    <div className="col-12 lg:col-6 xl:col-3">
      <div className="card mb-0">
        <div className="flex justify-content-between mb-3">
          <div>
            <span className="block text-500 font-medium mb-3">{title}</span>
            <div className="text-900 font-medium text-xl">{number}</div>
          </div>
          <div className={`flex align-items-center justify-content-center ${iconBG} border-round`} style={{ width: '2.5rem', height: '2.5rem' }}>
            <i className={`${icon}`} />
          </div>
        </div>
        {newNumber ? (
          <>
            <span className="text-green-500 font-medium">{newNumberPrefix} {newNumber} {newNumberSuffix} </span>
            <span className="text-500">{endText}</span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default OverviewCard;