import styled from 'styled-components';

export const MainWrapper = styled.div`
  height: calc(100vh - 115px);
  overflow-y: auto;
  padding: 8px;
  overflow-x: hidden;
`;

export const ColumnsContainer = styled.div`
  display: grid;
  gap: 16px;
  max-width: 1750px;
  margin: 0 auto;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
`;

export const StyledCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  min-width: 0;
`;

export const CardSection = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
