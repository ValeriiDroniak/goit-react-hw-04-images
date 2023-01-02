import PropTypes from 'prop-types';
// import { Component } from 'react';
import { Box } from 'components/Box/Box';
import { Form, Input, SearchButton } from './Searchbar.styled';
import { GoSearch } from 'react-icons/go';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.currentTarget.lastChild.value.trim());
    evt.target.reset();
  };

  return (
    <Box
      as="header"
      position="sticky"
      zIndex="1100"
      top={0}
      left={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="64px"
      pr="24px"
      pl="24px"
      pt="12px"
      pb="12px"
      color="white"
      bg="primary"
      boxShadow="go_it"
    >
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <GoSearch size="80%" />
        </SearchButton>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Box>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
